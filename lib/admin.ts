import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2djxMegU8xFCt0FNgnhtrplNDRI",
];

export const getIsAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};