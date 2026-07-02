# 📚 Fantasy Book Store - React Edition

Benvenuto nel **Fantasy Book Store**! Questa non è la solita libreria polverosa, ma un'applicazione web ultra-reattiva creata in React e pompata con Bootstrap. Qui puoi sfogliare 150 titoli fantasy, cercarli in tempo reale e distruggere (o creare) recensioni grazie a un'integrazione API live.

E sì... la colonna dei commenti ti segue mentre scorri la pagina. Niente più scroll infiniti verso l'alto. Prego, non c'è di che! 😎

---

## ✨ Funzionalità Super-Potenti

- **🎯 Filtro in Tempo Reale (The Magic Input):** Digita una lettera e guarda l'array di 150 libri ridursi all'istante grazie alla magia di `useState`.
- **📱 Griglia Bootstrap (Responsive o Morte):** Layout flessibile che a `768px` (schermi tablet/MD) si riorganizza magicamente in 3 colonne pulite.
- **📡 Connessione API Live:**
  - `GET`: Scarica i commenti del libro selezionato non appena ci clicchi sopra.
  - `POST`: Invia le tue recensioni con tanto di voto (trasformato rigorosamente in numero, perché le API sono pignole).
  - `DELETE`: Elimina i commenti con un click per una UX pulita e senza rimorsi.
- **⚓ Sticky Sidebar:** L'area dei commenti è incollata con `position: sticky`. Ti segue fedelmente mentre esplori il catalogo verso il basso.
- **🔤 Rigore dei Componenti:** File strutturati con cura millimetrica e rigorosamente con la **C**aps Lock attivata sui nomi (lezione imparata!).

---

## 🏗️ L'Architettura dei Componenti

L'applicazione è divisa in piccoli pezzi riutilizzabili per evitare codice "lungo l'ira di Dio":

- `HeaderNav`: La barra di navigazione scura e minimale.
- `Jumbotron`: Il grande striscione di benvenuto.
- `ListBooks`: Gestisce i 150 libri, la barra di ricerca e cattura l'ASIN al click.
- `CommentArea`: Il centro di controllo che riceve l'ASIN e coordina le chiamate `GET`.
- `CommentsList`: Mostra le recensioni e ospita il temibile pulsante `DELETE`.
- `AddComment`: Il form per dare i tuoi voti da 1 a 5 e fare il `POST` dei dati.

---

## 🚀 Come lanciarlo in Locale

Se vuoi clonarlo e farlo girare sul tuo computer, la pozione magica è questa:

1. Installa le dipendenze:
   ```bash
   npm install
   ```
2. Installa Bootstrap nella cartella corretta :
   ```bash
   npm install bootstrap
   ```
3. Fai partire il server locale ultra-veloce di Vite:
   ```bash
   npm run dev
   ```

_Fatto con il 100% di JavaScript reattivo e lo 0% di Live Server._ 🚀
ƒ
