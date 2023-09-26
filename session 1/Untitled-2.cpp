#include <iostream>
#include <math.h>
using namespace std;

int main() {
	int n,i;
	float s=0;
	cout<<"Nhap vao so nguyen n:"<<endl;
	cin>>n;
	if (n<5,n>100){
		cout<<"Nhap lai so nguyen n:"<<endl;
		cin>>n;
	}
	for (i=1;i<=n;i++){
		s=sqrt(s+i*i);
		cout<<"Tong day so la:"<<s<<endl;
	}
	
	
	return 0;
}
