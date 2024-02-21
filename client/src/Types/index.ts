export interface IConvertPair {
  from: string;
  to: string;
}

export type ICode = [string, string];

export interface IConvertResponseData {
  base_code: string;
  target_code: string;
  conversion_rate: number;
  conversion_result: number;
  time_last_update_utc: string;
  result: string;
}
