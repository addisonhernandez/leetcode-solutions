import lls "github.com/emirpasic/gods/stacks/linkedliststack"

func isValid(s string) bool {
    parens := lls.New()
    pairs := map[rune]rune {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    
    for _, r := range s {
        if r == ')' || r == ']' || r == '}' {
            if p, ok := parens.Pop(); !ok || p != pairs[r] {
                return false
            }
        } else {
            parens.Push(r)
        }
    }
    
    return parens.Empty()
}