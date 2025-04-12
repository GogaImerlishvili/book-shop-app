import { Button } from "@/components/ui/button";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => (
  <>
   <BookOverview {...sampleBooks[0]} />
   <BookList  />
  </>
);

export default Home;
