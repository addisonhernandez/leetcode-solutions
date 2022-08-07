const mod int = 1e9 + 7

func countVowelPermutation(n int) int {
    a, e, i, o, u := 1, 1, 1, 1, 1
    
    for ; n > 1; n-- {
        a, e, i, o, u = (e + i + u) % mod, (a + i) % mod, (e + o) % mod, i, (i + o) % mod
    }
    
    return (a + e + i + o + u) % mod
}

/*
a - 1
e - 2
i - 4
o - 2
u - 1
*/