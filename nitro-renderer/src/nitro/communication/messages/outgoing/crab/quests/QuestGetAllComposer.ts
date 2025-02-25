import { IMessageComposer } from "../../../../../../api";

export class QuestGetAllComposer implements IMessageComposer<ConstructorParameters<typeof QuestGetAllComposer>> {
  private _data: ConstructorParameters<typeof QuestGetAllComposer>;

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
