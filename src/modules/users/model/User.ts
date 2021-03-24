import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  admin: boolean = false;
  email: string;
  created_at: Date;
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
