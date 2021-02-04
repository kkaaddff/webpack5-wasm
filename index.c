#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    srand(time(NULL)); // initialize random seed
    int color_idx = rand() % 126;
    printf("%d", color_idx);
    return color_idx;
}
