import { PDFDictionary } from 'core/pdf-objects';
import { isInstance, validate } from 'utils/validate';

class PDFLinearizationParams extends PDFDictionary {
  public static validKeys = Object.freeze(['L', 'H', 'O', 'E', 'N', 'T', 'P']);

  public static fromDict = (dict: PDFDictionary): PDFLinearizationParams => {
    validate(dict, isInstance(PDFDictionary), '"dict" must be a PDFDictionary');
    return new PDFLinearizationParams(
      dict.map,
      dict.index,
      PDFLinearizationParams.validKeys,
    );
  };
}

export default PDFLinearizationParams;
