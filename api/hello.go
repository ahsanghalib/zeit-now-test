package hanlder

import (
	"fmt"
	"net/http"
)

func Hanlder(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}