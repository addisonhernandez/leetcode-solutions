class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
        parent_of = { c: c for c in ascii_lowercase }
        
        def find(char: str) -> str:
            """Search the unions for the top-level element.
            The commented line runs a union find without path compression.
            """
            # return char if parent_of[char] == char else find(parent_of[char])
            if parent_of[char] == char:
                return char
            parent_of[char] = find(parent_of[char])
            return parent_of[char]
        
        # Iterate over equations and form unions
        for x, eq, _, y in equations:
            if eq == "=":
                parent_of[find(x)] = find(y)
        
        # Iterate over equations and check for conflicts
        for x, eq, _, y in equations:
            if eq == "!" and parent_of[find(x)] == find(y):
                return False
        
        return True