import { listen } from "@boostbank/stateless";
import SelectTodoReaction from "./../reactions/SelectTodoReaction";

export default function combineReactions() {
  listen(
    SelectTodoReaction().eventName,
    SelectTodoReaction().id,
    SelectTodoReaction().reaction
  );
}
