import sys

def max_product_per_row(x, y, dx, dy, count) -> int:
    m = 0    
    for i in range(count - 3):
        a = grid[y+dy*0][x+dx*0]
        b = grid[y+dy*1][x+dx*1]
        c = grid[y+dy*2][x+dx*2]
        d = grid[y+dy*3][x+dx*3]
        p = a*b*c*d
        x += dx
        y += dy
        m = max(m, p)
    return m
        
def max_product() -> int:
    m = 0
    for i in range(0, 20):
        m = max(m, max_product_per_row(i, 0, 0, 1, 20))
        m = max(m, max_product_per_row(0, i, 1, 0, 20))
        m = max(m, max_product_per_row(i, 0, 1, 1, 20 - i))
        m = max(m, max_product_per_row(0, i, 1, 1, 20 - i))
        m = max(m, max_product_per_row(i, 0, -1, 1, i + 1))
        m = max(m, max_product_per_row(19, i, -1, 1, 20 - i))
    return m


grid = []
for grid_i in range(20):
	grid_t = [int(grid_temp) for grid_temp in input().strip().split(' ')]
	grid.append(grid_t)
    
print(max_product())