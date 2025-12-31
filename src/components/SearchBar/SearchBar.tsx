import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const action = (formData: FormData) => {
    const query = String(formData.get("query") ?? "").trim();

    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <a
        className={styles.link}
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by TMDB
      </a>

      <form className={styles.form} action={action}>
        <input
          className={styles.input}
          type="text"
          name="query"
          placeholder="Search movies..."
        />
        <button className={styles.button}>Search</button>
      </form>
    </header>
  );
}
