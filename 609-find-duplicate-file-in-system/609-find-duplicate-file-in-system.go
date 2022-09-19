func findDuplicate(paths []string) [][]string {
    contentsToPaths := make(map[string][]string)
    
    for _, line := range paths {
        s := strings.SplitN(line, " ", 2)
        dir := s[0]
        
        for _, file := range strings.Split(s[1], " ") {
            f := strings.Split(file, "(")
            fname, contents := f[0], f[1]
            
            contentsToPaths[contents] = append(contentsToPaths[contents], fmt.Sprintf("%s/%s", dir, fname))
        }
    }
    
    duplicates := [][]string{}
    for _, paths := range contentsToPaths {
        if len(paths) > 1 {
            duplicates = append(duplicates, paths)
        }
    }
    return duplicates
}