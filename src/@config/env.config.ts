interface IENV {
  ApiEndpoint: string | null;
  SITE_KEY: string;
}

export const ENV: IENV = {
  ApiEndpoint: process.env.NEXT_PUBLIC_BASE_URL || null,
  SITE_KEY: process.env.SECRET_KEY || "",
};
