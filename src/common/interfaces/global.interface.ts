import { EResponseCodes } from "../constants/api.enum";

export interface IMessage {
  type?: EResponseCodes;
  title?: string;
  description?: string | React.JSX.Element;
  show?: boolean;
  okTitle?: string;
  cancelTitle?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onClickOutClose?: boolean;
  onClose?: () => void;
  background?: boolean;
  sizeWidth?: string;
  marginTopAndBotton?: string;
  alignDescription?: string;
  style?: string;
}

export interface IGenericList {
  id: number;
  grouper: string;
  itemCode: string;
  itemDescription: string;
  additionalFields?: object;
}

export interface IAdditionalField {
  grouper: string;
  parentItemCode: string;
  fieldName?: string;
}
