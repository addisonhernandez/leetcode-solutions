import "strings"

type numeral struct {
	symbol string
	value  int
}

func intToRoman(num int) string {
	numerals := []numeral{
		{"M", 1000},
		{"CM", 900},
		{"D", 500},
		{"CD", 400},
		{"C", 100},
		{"XC", 90},
		{"L", 50},
		{"XL", 40},
		{"X", 10},
		{"IX", 9},
		{"V", 5},
		{"IV", 4},
		{"I", 1},
	}

	var res strings.Builder

	for _, numeral := range numerals {
		for num >= numeral.value {
			num -= numeral.value
			res.WriteString(numeral.symbol)
		}
	}

	return res.String()
}
