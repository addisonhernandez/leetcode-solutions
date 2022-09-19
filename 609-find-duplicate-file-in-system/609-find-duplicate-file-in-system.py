class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        contents_to_files = defaultdict(list)
        
        for path in paths:
            directory, *files = path.split()
            for file in files:
                # fname, contents = re.match(r"(.*\.txt)\((.*)\)", file).groups()
                fname, contents = file.split("(")
                contents_to_files[contents].append(f"{directory}/{fname}")
        
        return [fnames for fnames in contents_to_files.values() if len(fnames) > 1]