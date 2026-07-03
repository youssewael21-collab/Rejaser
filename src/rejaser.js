import { useState } from "react";

import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";

import data from "./context/dataContext";

export default function Rejaser() {
  const [dataState] = useState(data);
  const dataToUse = dataState;

  for (let sdf of data[1].film) {
    console.log("./aflam/" + sdf + ".jpg");
  }

  const getDistinctActorIndexes = () => {
    const first = Math.floor(Math.random() * data.length);
    let second = Math.floor(Math.random() * data.length);
    while (second === first) {
      second = Math.floor(Math.random() * data.length);
    }
    return [first, second];
  };

  const initializeGame = () => {
    const [first, second] = getDistinctActorIndexes();
    return { currentIndex: first, targetIndex: second };
  };

  const [game, setGame] = useState(() => initializeGame());
  const [matchedActors, setMatchedActors] = useState([]);
  const [message, setMessage] = useState("");
  const [hasWon, setHasWon] = useState(false);
  const [history, setHistory] = useState([]);

  const currentActor = data[game.currentIndex];
  const targetActor = data[game.targetIndex];

  const saveHistory = () => {
    setHistory((prev) => [
      ...prev,
      {
        game,
        matchedActors,
        message,
        hasWon,
      },
    ]);
  };

  const handleUndo = () => {
    if (history.length === 0) return;

    const previousState = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setGame(previousState.game);
    setMatchedActors(previousState.matchedActors);
    setMessage(previousState.message);
    setHasWon(previousState.hasWon);
  };

  const handleFilmClick = (film) => {
    if (hasWon) return;

    saveHistory();

    const actorsForFilm = data.filter((item) => item.film.includes(film));
    const win = actorsForFilm.some((item) => item.actor === targetActor.actor);

    setMatchedActors(
      actorsForFilm.filter((item) => item.actor !== currentActor.actor),
    );
    setHasWon(win);

    if (win) {
      setMessage("الكسباااااان! وصلت لفيلم الممثل التاني.");
    } else {
      setMessage(
        "الممثل التاني غير موجود في هذا الفيلم. اختر ممثلًا من الفيلم للمتابعة.",
      );
    }
  };

  const handleActorClick = (actor) => {
    const clickedIndex = data.findIndex((item) => item.actor === actor.actor);
    if (clickedIndex === -1) return;

    saveHistory();

    setGame((prev) => ({ ...prev, currentIndex: clickedIndex }));
    setMatchedActors([]);
    setHasWon(false);
    setMessage("اختر فيلمًا من الممثل الجديد.");
  };

  const resetGame = () => {
    setHistory([]);
    setGame(initializeGame());
    setMatchedActors([]);
    setMessage("");
    setHasWon(false);
  };

  const filmCards = currentActor.film.map((film) => (
    <Button
      className="film-card"
      onClick={() => handleFilmClick(film)}
      key={film}
      style={{ minWidth: "20%", height: "100%" }}
    >
      <CardMedia
        component="img"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          border: "2px solid #bc42f5",
          boxShadow: "0 0 5px #bc42f5, inset 0 0 5px #bc42f5",
        }}
        image={film}
        alt={film}
      />
    </Button>
  ));

  const actorCards = matchedActors.map((actor) => (
    <div
      className="actor-card"
      onClick={() => handleActorClick(actor)}
      key={actor.actor}
      style={{
        minWidth: "20%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(150deg, #11071d, #3e1474 70%)",
        border: "2px solid #bc42f5",
        boxShadow: "0 0 5px #bc42f5, inset 0 0 5px #bc42f5",
        borderRadius: "20px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        image={actor.actor}
        alt={actor.actor}
      />
    </div>
  ));

  const displayContent = matchedActors.length > 0 ? actorCards : filmCards;

  return (
    <div
      className="rejaser-container"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        background: "#07061b",
        boxShadow: "0 0 30px 5px black, 0 0 5px #f5c542, inset 0 0 5px #f5c542",
        border: "3px solid #f5c542",
        width: "70vw",
        height: "90vh",
        padding: "20px",
        borderRadius: "30px",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button
          onClick={handleUndo}
          disabled={history.length === 0}
          style={{
            background: "linear-gradient(150deg, #8b650dc5, #f5c542 70%)",
            color: "black",
            fontSize: "16px",
            border: "2px solid #f5c542",
            boxShadow: "0 0 5px #f5c542",
          }}
        >
          رجوع
        </Button>
        <Button
          onClick={resetGame}
          style={{
            background: "linear-gradient(150deg, #3d0707d2, darkred 70%)",
            color: "white",
            fontSize: "16px",
            border: "2px solid darkred",
            boxShadow: "0 0 5px darkred",
          }}
        >
          بداية جديدة
        </Button>
      </div>

      {/* actor 1 */}
      <div
        style={{
          width: "100%",
          height: "250px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div
          className="current-actor"
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "10px",
            width: "200px",
            height: "200px",
          }}
        >
          <div
            style={{
              background: "linear-gradient( #1812048a, #f5c542)",
              padding: "10px",
              border: "1px solid #f5c542",
              boxShadow: "0 0 5px #f5c542, inset 0 0 5px #f5c542",
              borderRadius: "10px",
              width: "100%",
              height: "100%",
              transition: "background 0.2s",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={currentActor.actor}
              alt="current actor"
            />
          </div>
        </div>

        {/* text */}
        <div
          className="text"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "10px",
          }}
        >
          <div style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}>
            {message || "اضغط على فيلم لترى إذا كان الممثل التاني فيه."}
          </div>
          <div
            style={{
              color: "#f5c542",
              fontSize: "16px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            الممثل الهدف:
            <br />
            <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
              {targetActor.actor.split("/").pop().replace(".png", "")}
            </span>
          </div>
        </div>

        {/* actor 2 */}
        <div
          className="current-actor"
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "10px",
            width: "200px",
            height: "200px",
          }}
        >
          <div
            style={{
              background: "linear-gradient( #0404188a, #424ef5)",
              padding: "10px",
              border: "1px solid #4e42f5",
              boxShadow: "0 0 5px #4e42f5, inset 0 0 5px #4e42f5",
              borderRadius: "10px",
              width: "100%",
              height: "100%",
              transition: "background 0.2s",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={targetActor.actor}
              alt="target actor"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          color: "white",
          fontSize: "18px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        أفلام الممثل الحالي
      </div>

      <div
        className="film-cards-container"
        style={{
          width: "100%",
          height: "70%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "scroll",
          padding: "10px",
          gap: "10px",
        }}
      >
        {displayContent}
      </div>

      {hasWon && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            color: "white",
            padding: "30px",
            borderRadius: "30px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            الكسباااااان!
          </div>
          <div
            style={{ fontSize: "20px", textAlign: "center", maxWidth: "70%" }}
          >
            وصلت لفيلم الممثل التاني. مبروك!
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Button
              onClick={resetGame}
              style={{
                background: "#f5c542",
                border: "2px solid #f5c542",
                boxShadow: "0 0 5px #f5c542",
                color: "black",
                fontSize: "18px",
                padding: "10px 20px",
              }}
            >
              إعادة اللعبة
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
