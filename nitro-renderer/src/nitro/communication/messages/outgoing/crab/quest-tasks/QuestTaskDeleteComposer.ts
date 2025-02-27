import { IMessageComposer } from "../../../../../../api";

export class QuestTaskDeleteComposer implements IMessageComposer<ConstructorParameters<typeof QuestTaskDeleteComposer>> {
  private _data: ConstructorParameters<typeof QuestTaskDeleteComposer>;

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
