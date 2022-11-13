import type { NextApiRequest, NextApiResponse } from "next";
import { COMMENTS } from "../../utils/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(COMMENTS);
}
