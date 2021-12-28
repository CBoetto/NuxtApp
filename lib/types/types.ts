export interface RootState {
  userList: User[]
}

export interface User {
  apiKey: string,
  createdAt: string,
  email: string,
  id: string,
  updatedAt: string,
  username: string,
  profile: UserProfile,
  roles: string[];
}

export interface UserProfile {
  about: string,
  address: string,
  company: string,
  dob: string,
  location: UserLocation,
  name: string
}

export interface UserLocation {
  lat: number;
  long: number;
}