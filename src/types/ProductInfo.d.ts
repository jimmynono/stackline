export type Review = {
  customer: string;
  review: string;
  score: number;
};

export type SalesData = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export type Product = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Review[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sale[];
};

export type ProductCardProps = {
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
};

export type SalesProps = {
  data: SalesData[];
};

export type d3LineProps = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
};

export type RootState = {
  dataReducer: {
    data: Product;
  };
};
