# 📚 Fantasy Book Store - React Router Edition

Benvenuto nel **Fantasy Book Store**! Questa non è la solita libreria polverosa, ma un'applicazione web evoluta e multi-pagina creata in React, potenziata con Bootstrap e gestita tramite un sistema di **Routing Dinamico**. Qui puoi sfogliare 150 titoli fantasy, cercarli in tempo reale ed esplorare le recensioni live su una pagina dedicata a ogni singolo libro.

Niente più layout intasati o scroll infiniti: ora ogni libro ha la sua area segreta! 😎

---

## ✨ Funzionalità Super-Potenti

- **🎯 Filtro in Tempo Reale (The Magic Input):** Sulla Home Page, digita una lettera e guarda l'array di 150 libri ridursi all'istante grazie allo stato controllato di `useState`.
- **🚦 Routing Avanzato (URL-Driven State):** Grazie a `react-router-dom`, l'applicazione simula un'esperienza multi-pagina istantanea senza mai ricaricare il browser. Lo stato del libro selezionato non è più volatile, ma viaggia direttamente nell'URL.
- **📖 Pagina dei Dettagli Dinamica (`/details/:asin`):** Cliccando su un libro, l'applicazione estrae l'ASIN dall'indirizzo web tramite l'hook `useParams`, recupera le informazioni reali dal file JSON (copertina, prezzo, titolo) e monta la sezione recensioni specifica.
- **📡 Connessione API Live ed Equivalente Funzionale del Ciclo di Vita:**
  - `GET`: Scarica i commenti del libro non appena la pagina dei dettagli si carica, sfruttando l'hook `useEffect` con dipendenza `[asin]` per emulare il comportamento di un `componentDidUpdate`.
  - `POST`: Invia le tue recensioni con tanto di voto (trasformato rigorosamente in numero) direttamente dal form dedicato.
  - `DELETE`: Elimina i commenti con un click per una UX pulita e senza rimorsi.
- **🛡️ Gestione degli Errori e Sicurezza (404 Fallback):** Se un utente digita manualmente un URL errato o un ASIN inesistente nel browser, l'applicazione attiva dei sistemi di protezione mostrando un layout di errore controllato.

---

## 🏗️ L'Architettura dei Componenti e delle Pagine

L'applicazione è strutturata in modo pulito separando i blocchi riutilizzabili (**components**) dalle visualizzazioni principali della navigazione (**pages**):

### 📄 Le Pagine (Pages)

- `Home`: La pagina principale di atterraggio (`/`) che ospita il messaggio di benvenuto e l'intero catalogo filtrabile.
- `BookDetails`: La pagina di destinazione dei dettagli (`/details/:asin`) che si occupa di catturare i parametri dell'URL, mostrare la scheda del libro e attivare l'area commenti.

### 🧩 I Componenti (Components)

- `HeaderNav`: La barra di navigazione scura e minimale, visibile in modo persistente su tutte le pagine.
- `Jumbotron`: Il grande striscione grafico di benvenuto posizionato nella Home.
- `ListBooks`: Gestisce la griglia responsiva dei libri e la barra di ricerca, delegando la navigazione a `useNavigate` al click sulle card.
- `CommentArea`: Il centro di controllo asincrono che riceve l'ASIN e coordina le chiamate `GET` in tempo reale verso l'endpoint delle API.
- `CommentsList`: Mostra la lista delle recensioni attive scaricate.
- `AddComment`: Il form stabile per inserire il testo e inviare il `POST` del rating.

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
