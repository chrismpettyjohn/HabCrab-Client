import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { QuestListEventParser } from "../../../parser";

export class QuestListEvent extends MessageEvent implements IMessageEvent {
  constructor(callBack: Function) {
    super(callBack, QuestListEventParser);
  }

  public getParser(): QuestListEventParser {
    return this.parser as QuestListEventParser;
  }
}
