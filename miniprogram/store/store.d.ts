/* 返回值类型约束 */
export interface ResponseProps {
  data: {
    message: never[];
    meta: never[];
  };
}
export interface CatesProps {
  cat_deleted: boolean;
  cat_icon: string;
  cat_id: number;
  cat_level: number;
  cat_name: string;
  cat_pid: number;
  children: Array<{
    cat_deleted: boolean;
    cat_icon: string;
    cat_id: number;
    cat_level: number;
    cat_name: string;
    cat_pid: number;
  }>;
}
