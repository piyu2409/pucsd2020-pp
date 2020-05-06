#include <stdio.h>
#include "include/arithmaticop.h"
void main()
{
	int n1,n2,val;
	int op;
	printf("Enter the two numbers\n");
	scanf("%d %d",&n1,&n2);
	printf("Enter choice\n");
	scanf("%d",&op);
	switch(op)
	{
		case 1 :printf("%d\n",add(n1,n2));
			break;
		case 2 :printf("%d\n",sub(n1,n2));
			break;
		case 3 :printf("%d\n",mult(n1,n2));
			break;
		case 4 :printf("%d\n",div(n1,n2));
			break;
	}
}
