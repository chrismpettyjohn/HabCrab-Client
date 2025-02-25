import { IMessageComposer } from "../../../../../../api";

export class QuestDeleteComposer implements IMessageComposer<ConstructorParameters<typeof QuestDeleteComposer>> {
  private _data: ConstructorParameters<typeof QuestDeleteComposer>;

  constructor(questId: number) {
    this._data = [questId];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
