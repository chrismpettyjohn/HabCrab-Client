import { IMessageComposer } from "../../../../../../api";

export class TrackerDeleteComposer implements IMessageComposer<ConstructorParameters<typeof TrackerDeleteComposer>> {
  private _data: ConstructorParameters<typeof TrackerDeleteComposer>;

  constructor(trackerId: number) {
    this._data = [trackerId];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
