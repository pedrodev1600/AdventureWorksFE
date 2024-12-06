
export interface SalesOrder {
    salesOrderId: number;
    salesOrderNumber: string;
    revisionNumber: number;
    orderDate: Date;
    dueDate: Date;
    shipDate?: Date;
    status: SalesOrderStatus;
    onlineOrderFlag: boolean;
    purchaseOrderNumber?: string;
    accountNumber?: string;
    customerId: number;
    salesPersonId?: number;
    territoryId?: number;
    billToAddressId: number;
    shipToAddressId: number;
    shipMethodId: number;
    creditCardId?: number;
    creditCardApprovalCode?: string;
    currencyRateId?: number;
    subTotal: number;
    taxAmt: number;
    freight: number;
    totalDue: number;
    comment?: string;
    rowguid: string;
    modifiedDate: Date;
  }
  
  export enum SalesOrderStatus {
    InProcess = 1,
    Approved,
    Backordered,
    Rejected,
    Shipped,
    Cancelled
  }
  
  export interface Customer {
    customerId: number;
    name: string;
    email: string;
    phone?: string;
  }
  
  export interface SalesPerson {
    salesPersonId: number;
    fullName: string;
    email: string;
  }
  
  export interface ShipMethod {
    shipMethodId: number;
    name: string;
    cost: number;
  }

  export interface SalesSummary{
    salesCount: number;
    salesTotalAmount: number;
    roundedSalesCount: number
  }

  export interface GroupedSale{
    id: number;
    name: string;
    subTotal: number
    taxAmount: number;
    freight: number;
    totalDue: number;
  }

  export interface ProductGroupedSale{
    productName: string;
    totalSalesAmount: number;
    totalQuantitySold: number;
    price: number;
    totalDiscounts: number;
    totalAmountSold: number;
  }

  export interface ProductListItem{
    productID: number;
    name: string;
    productNumber: string;
    color: string;
    size: string;
    standardCost: number;
    listPrice: number;
    productCategory: string;
    productModel: string;
    weight: number | null;
    safetyStockLevel: number;
    reorderPoint: number;
    sellStartDate: Date;
    sellEndDate: Date | null;
  }

  export interface ProductItem {
    productId: number;
    name: string;
    productNumber: string;
    makeFlag: boolean;
    finishedGoodsFlag: boolean;
    color?: string;
    safetyStockLevel: number;
    reorderPoint: number;
    standardCost: number;
    listPrice: number;
    size?: string;
    sizeUnitMeasureCode?: string;
    weightUnitMeasureCode?: string;
    weight?: number;
    daysToManufacture: number;
    productLine?: string;
    class?: string;
    style?: string;
    productSubcategoryId?: number;
    productModelId?: number;
  }
  
  