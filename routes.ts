import {Router} from 'https://deno.land/x/oak/mod.ts'
import { getBooks,getBook,addBook,updateBook,deleteBook} from "./controller.ts"

const router = new Router()
router.get("/books",getBooks)
.get("/books.:isbn",getBook)
.post("/books",addBook)
.put("/bookss/:isbn",updateBook)
.delete("/books/:isbn",deleteBook)
export default router