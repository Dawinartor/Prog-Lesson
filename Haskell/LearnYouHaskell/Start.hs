-- replace ghci prompt
:set prompt "ghci> "
-- use mathmatical arithmetics
50 * (100 - 4999)  -- output: -244950
-- pitfall: solution needs parrenthes
5 * (-3) -- output: -15
-- boolean opetations also usable
True && False -- output: False
False || True -- output: True
not (True && True) -- output: False
-- testing for equality
5 == 2 + (2 + 1) -- out: True
-- what is with whis?
4 + "Lol" -- doesn't work
"hello" == 5 -- doesn't work, also not
-- using functions
succ 5 -- out: 6
min 5 99 -- out: 5
max 45 54 -- out: 54
-- put functions together
(succ 9) + (max 5 4) + 1 
-- priorities with functions
succ 9 * 10 -- out: 100
succ (9 * 10) -- out: 91
-- cleaner code?
div 92 10 -- out: 9
92 `div` 10 -- out: 9
-- use doubled functions and priority
succ (succ 3) -- 1. (succ 3) = 4 / 2. succ 4
--
