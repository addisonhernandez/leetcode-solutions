func mirrorReflection(p int, q int) int {
    for p % 2 == 0 && q % 2 == 0 {
        p, q = p / 2, q / 2
    }
    return 1 - p % 2 + q % 2
}