/* eslint-disable new-cap */
import PDFOperator from 'core/pdf-operators/PDFOperator';

import { addStringToBuffer } from 'utils';
import { isNumber, validate } from 'utils/validate';

/**
 * Set the word spacing, Tw, to wordSpace, which shall be a number expressed in
 * unscaled text space units. Word spacing shall be used by the Tj, TJ, and '
 * operators. Initial value: 0.
 */
class Tw extends PDFOperator {
  public static of = (wordSpace: number) => new Tw(wordSpace);

  public wordSpace: number;

  constructor(wordSpace: number) {
    super();
    validate(
      wordSpace,
      isNumber,
      'Tw operator arg "wordSpace" must be a number.',
    );
    this.wordSpace = wordSpace;
  }

  public toString = (): string => `${this.wordSpace} Tw\n`;

  public bytesSize = () => this.toString().length;

  public copyBytesInto = (buffer: Uint8Array): Uint8Array =>
    addStringToBuffer(this.toString(), buffer);
}

export default Tw;
