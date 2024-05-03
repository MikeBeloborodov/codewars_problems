[![codecov](https://codecov.io/gh/MikeBeloborodov/codewars_problems/graph/badge.svg?token=276C6UO7OL)](https://codecov.io/gh/MikeBeloborodov/codewars_problems)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/563776c906754dc7ac3f31217a1ff03f)](https://app.codacy.com/gh/MikeBeloborodov/codewars_problems/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Test workflow](https://github.com/MikeBeloborodov/codewars_problems/actions/workflows/main.yml/badge.svg)](https://github.com/MikeBeloborodov/codewars_problems/actions/workflows/main.yml)
![GitHub repo size](https://img.shields.io/github/repo-size/MikeBeloborodov/codewars_problems)

---

![Codewars](https://www.codewars.com/users/MikeBeloborodov/badges/large)

## About

Various problems by kyu from website https://www.codewars.com/

### Clone and test

```sh
git clone https://github.com/MikeBeloborodov/codewars_problems
cd codewars_problems
npm i
npm run testall
```

### Add new kata with ts file, tests, readme and description

You only need a unique ID in the url \
For example, if url is https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript \
you only need the 54a2e93b22d236498400134b part.

```sh
npm run new --url=$kata_url
```

### Refresh kata count

```sh
npm run count
```

### Checkout to main and delete current branch

```sh
npm run chde
```

### Push to github

```sh
npm run push "$description"
```

### Katas solved

`Total`: 147
\
`8_kyu`: 47
\
`7_kyu`: 49
\
`6_kyu`: 38
\
`5_kyu`: 10
\
`4_kyu`: 3
