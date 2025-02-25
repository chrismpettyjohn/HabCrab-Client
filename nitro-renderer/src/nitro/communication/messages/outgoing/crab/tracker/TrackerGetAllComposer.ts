import { IMessageComposer } from "../../../../../../api";

export class TrackerGetAllComposer implements IMessageComposer<ConstructorParameters<typeof TrackerGetAllComposer>> {
  private _data: ConstructorParameters<typeof TrackerGetAllComposer>;

  constructor() {
    this._data = [];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
