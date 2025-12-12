import { assertEquals, assertThrows } from "@std/assert";
import { Board, Player } from "./board.ts";

Deno.test("dummy", () => {
  const board = new Board();
  const winner = board.winner(Player.PlayerX, 1, 1);
  assertEquals(winner, Player.Nobody);
});

Deno.test("ungültige Spalte soll Fehler werfen", () => {
  const board = new Board();

  assertThrows(() => {
    board.makeMove(Player.PlayerX, -1);
  });

  assertThrows(() => {
    board.makeMove(Player.PlayerX, 7);
  });
});
