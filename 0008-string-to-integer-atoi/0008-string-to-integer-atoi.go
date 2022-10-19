const INT32_MIN = -(1 << 31)
const INT32_MAX = (1 << 31) - 1

var charToInt = map[byte]int{
	'1': 1,
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9,
	'0': 0,
}

func myAtoi(s string) (res int) {
	i := 0
	sign := 1

  // Ignore leading whitespace.
	for i < len(s) && s[i] == ' ' {
		i++
	}
	if i == len(s) {
		return
	}

  // Handle +/-, if present
	if s[i] == '-' {
		sign = -1
		i++
	} else if s[i] == '+' {
		i++
	}

  // Convert valid digits.
	for ; i < len(s) && res < INT32_MAX; i++ {
		c, ok := charToInt[s[i]]
		if !ok {
			break
		}
		res = 10*res + c
	}

  // Clamp to signed 32 bit int.
	res = res * sign
	if res < INT32_MIN {
		res = INT32_MIN
	} else if res > INT32_MAX {
		res = INT32_MAX
	}

	return
}
