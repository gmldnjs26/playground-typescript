type Product = {
  id?: number;
  name: UserProfile[];
  price: number;
  brand: string;
  stock: number;
}

function fetchProducts(): Promise<Product[]> {

}

type ProductDetail = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

type UpdateProduct = Partial<Product>
// 특정 상품 정보를 업데이트하는 함수
function updateProduct(productItem: Partial<Product>) {

}

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// #1 Partial 구현
type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// #2 Partial 구현
type UserProfileUpdate2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p] // Mapped Type
}

// #3 Partial 구현
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// #4 Partial 구현
type Subset<T> = {
  [p in keyof T]?: T[p]
}
type UserProfileUpdate4 = Subset<UserProfile>