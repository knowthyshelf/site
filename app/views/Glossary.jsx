import React from 'react';

class Glossary extends React.Component{
  render() {
    let terms = [
      {
        "term": "Advance Copy",
        "redirect": "",
        "alternates": ["ARC", "ARE"],
        "definition": "a free copy of a new book that the publisher gives out to reviewers, booksellers, or others before the book is printed for mass distribution. It is often referred to as an Advanced Review Copy (ARC) or an Advanced Reader’s Edition (ARE). Despite technically preceding the first printing of a book, advance copies are not alway as desirable to collectors, especially when the advance copy is softcover and the first trade edition is hardcover"
      },
      {
        "term": "Association Copy",
        "redirect": "",
        "alternates": [],
        "definition": "a book with an interesting ownership history or provenance. The book may have been owned by the author, personally given away by the author (see Dedication Copy), or simply owned by a significant person"
      },
      {
        "term": "Binding",
        "redirect": "",
        "alternates": [],
        "definition": "as a noun, the protective covering on the front, spine, and back of a book. As a verb, binding is the process of sewing or gluing a text block into the protective covering to form a book"
      },
      {
        "term": "Blanks",
        "redirect": "",
        "alternates": [],
        "definition": "pages intentionally left empty"
      },
      {
        "term": "Blindstamp",
        "redirect": "",
        "alternates": ["blind stamp"],
        "definition": "an image or design formed by creating a depression in some material (paper, leather, etc.). Book owners or libraries will sometimes mark a book as their own with a blindstamp as it is usually unobtrusive, especially compared with a bookplate"
      },
      {
        "term": "Boards",
        "redirect": "",
        "alternates": [],
        "definition": "the front and back covers of a hardcover book. They are often composed of a cardboard base with cloth, paper, or leather covering"
      },
      {
        "term": "Book Club Edition",
        "redirect": "",
        "alternates": ["BC", "BCE"],
        "definition": "a book issued by one of many “Book Clubs” that is generally of cheaper quality than a trade edition. The book might be smaller in size and use less expensive materials for the paper, boards, and dust wrapper. Some books will explicitly state that they are a Book Club Edition, others can be identified by a code on the last page or back flap of the dust wrapper, a small blindstamped dot or square on the rear board, or the omission of a price, barcode, or any print information. In general, Book Club Editions are far less collectable (and therefore valuable) than trade editions"
      },

      {
        "term": "Book-Of-The-Month Club Edition",
        "redirect": "",
        "alternates": ["BOMC"],
        "definition": "a particular type of Book Club Edition"
      },
      {
        "term": "Bookplate",
        "redirect": "",
        "alternates": ["ex-libris"],
        "definition": "a simple or decorative label pasted into a book (often on the front pastedown or towards the front) to indicate its owner. Bookplates can help to establish provenance"
      },
      {
        "term": "Brodart",
        "redirect": "",
        "alternates": [],
        "definition": "a particular brand of archival book cover made of mylar or clear polyester that helps to maintain a dust jacket"
      },
      {
        "term": "Buckram",
        "redirect": "",
        "alternates": [],
        "definition": "a stiff woven cloth used to protect and cover book boards"
      },
      {
        "term": "Calf",
        "redirect": "",
        "alternates": [],
        "definition": "calf hide is a common type of leather binding that can be stained, scored, polished, or otherwise treated to alter its look"
      },
      {
        "term": "Cloth",
        "redirect": "",
        "alternates": [],
        "definition": "a fabric covering for a book’s boards"
      },
      {
        "term": "Colophon",
        "redirect": "",
        "alternates": [],
        "definition": "there are two definitions for colophon. 1) an inscription generally found at the end of a book containing information such as the font, place, or date of publication  2) a printer or publisher’s identifying marker"
      },
      {
        "term": "Copyright Page",
        "redirect": "",
        "alternates": [],
        "definition": "a page containing print and cataloguing information and artistic property protection that is generally found on the verso of the title page towards the beginning of a book"
      },
      {
        "term": "Covers",
        "redirect": "",
        "alternates": [],
        "definition": "the front and back panels of the binding of a book"
      },
      {
        "term": "Deckle Edges",
        "redirect": "",
        "alternates": [],
        "definition": "hen the three outer sides of the pages are rough and uneven rather than trimmed to be flush"
      },
      {
        "term": "Dedication Copy",
        "redirect": "",
        "alternates": [],
        "definition": "a particular type of association copy in which the author of a book has personally inscribed and given that book to someone"
      },
      {
        "term": "Definitive Edition",
        "redirect": "",
        "alternates": [],
        "definition": "the most authoritative version of a work, usually with distinguishable changes from a previously-released edition that for some reason did not totally satisfy the author"
      },
      {
        "term": "Duodecimo",
        "redirect": "",
        "alternates": [],
        "definition": "in modern times this term is used simply to refer to a book that is around 5” (127 mm) x 7 ⅜” (187 mm). Traditionally, duodecimo (abbreviated to 12mo or 12°) referred to a book that was manufactured by printing 12 pages on each side of a sheet of paper and then folding that sheet four times into a gathering of 12 leaves or 24 pages"
      },
      {
        "term": "Dust Jacket",
        "redirect": "",
        "alternates": ["DJ"],
        "definition": "a book’s detachable outer cover, usually made of paper and printed with illustrations and text. It has folded flaps that wrap around the front and back covers that hold it onto the book; often these flaps contain information about the book and/or positive review blurbs. The dust wrapper (despite being a protective cover itself) is relatively fragile and is therefore a desirable component of a book for collectors"
      },
      {
        "term": "Dust Wrapper",
        "redirect": "Dust Jacket",
        "alternates": ["DW"],
        "definition": ""
      },
      {
        "term": "Edges",
        "redirect": "",
        "alternates": [],
        "definition": "this refers to the three outer sides of the pages of a book, and are generally referenced when some or all of the edges are notable (for example, the book might be referred to as AEG or TEG to indicate all edges gilt or top edge gilt)"
      },
      {
        "term": "Endpaper",
        "redirect": "",
        "alternates": ["End-Paper"],
        "definition": "a blank or decorated leaf of paper at the beginning or end of a book with one side fixed to the inside of a cover. The side of paper fixed to the cover is known as the pastedown while the unfixed side is known as the free endpaper. The front and rear endpapers are often abbreviated to FEP and REP respectively, while the front and rear free endpapers are more specifically abbreviated to FFEP and RFEP"
      },
      {
        "term": "Ephemera",
        "redirect": "",
        "alternates": [],
        "definition": "written or printed items associated with a book that are not intended to last long"
      },
      {
        "term": "Errata",
        "redirect": "",
        "alternates": ["Errata Slip"],
        "definition": "a list of corrected errors appended to a book, either bound in or laid-in on a slip"
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Facsimile",
        "redirect": "",
        "alternates": [],
        "definition": "a reproduction of an old book that attempts to be as similar to the original edition as possible"
      },
      {
        "term": "First and Second Printing Before Publication",
        "redirect": "",
        "alternates": [],
        "definition": "a term that publishers add to the copyright page to denote the fact that a book belongs to a second or later print run that was called for (before the publication date) due to an unexpectedly high demand. This term does not refer to a first printing (or first edition)"
      },
      {
        "term": "First Edition",
        "redirect": "",
        "alternates": [],
        "definition": "book collectors use this term to refer to the earliest published version of a complete work. As soon as a book is reprinted, even if it is nearly identical to the original edition, collectors would not refer to it as a first edition. Bibliographically, however, this term refers to all copies of a book that are substantially printed from the first setting of type, allowing for minor revisions in typography and text. In this sense, a book would only be labelled a second (or later) edition if the format changed (E.G. hardcover to softcover) or if the text was substantially revised (E.G. whole chapters or storylines were introduced, omitted, or rearranged)"
      },
      {
        "term": "First Printing",
        "redirect": "",
        "alternates": [],
        "definition": "the first printing of a new format or substantially revised edition of a book that has previously been released (for example, the first printing of a paperback edition of a previously released hardcover book)"
      },
      {
        "term": "First Trade Edition",
        "redirect": "",
        "alternates": [],
        "definition": "the first version of a book that is available for sale to the general public. Occasionally publishers will precede this version with a limited edition of the book"
      },
      {
        "term": "Flaps",
        "redirect": "",
        "alternates": [],
        "definition": "the parts of a dust jacket that fold around to the inside of the covers, one in the front and one in the rear. Often, the flaps contain information about the book, author, and/or publisher as well as promotional material such as positive review blurbs or advertisements for other books"
      },
      {
        "term": "Flyleaf",
        "redirect": "",
        "alternates": [],
        "definition": "a blank leaf at the beginning or end of a book"
      },
      {
        "term": "Folio",
        "redirect": "",
        "alternates": [],
        "definition": "in modern times this term is used simply to refer to a book that is around 12” (305 mm) x 15” (382 mm). Traditionally, folio (abbreviated to fo or 2°) referred to a book that was manufactured by printing two pages on each side of a sheet of paper and then folding that sheet once into a gathering of two leaves or four pages"
      },
      {
        "term": "Front Free Endpaper",
        "redirect": "",
        "alternates": ["FFEP"],
        "definition": "the first unfixed leaf of a book, blank or decorated, whose other half (the pastedown) is connected to the inside of the front board"
      },
      {
        "term": "Frontispiece",
        "redirect": "",
        "alternates": [],
        "definition": "a decorative or informative illustration located across from the title page"
      },
      {
        "term": "Galley Proofs",
        "redirect": "",
        "alternates": ["Galleys", "Loose Galleys"],
        "definition": " a preliminary version of a book intended for proofreading and copy-editing that may also be used for promotional and review purposes. The name comes from the metal trays called galleys that printers used to set pages in when printing limited copies for proofreading"
      },
      {
        "term": "Gathering",
        "redirect": "",
        "alternates": [],
        "definition": "a group of sheets folded one or more times and sewn into the binding of a book; once cut they become the leaves of the book"
      },
      {
        "term": "Gilt",
        "redirect": "",
        "alternates": [],
        "definition": "gold (or fake gold) that has been applied in powder form to a part of a book. Often this gilding occurs on the top or all edges of the pages (abbreviated TEG or AEG), but it can also be found in the text on the boards as well as in designs on the cover or spine"
      },
      {
        "term": "Glassine",
        "redirect": "",
        "alternates": [],
        "definition": "a semi-translucent paper occasionally used as a protective outer layer for a dust jacket or in lieu of a dust jacket"
      },
      {
        "term": "Gutter",
        "redirect": "",
        "alternates": [],
        "definition": "the inner margin found between the text and the binding of a book. Occasionally publishers will place printing codes that indicate what edition a book is in the gutter"
      },
      {
        "term": "Half-bound",
        "redirect": "",
        "alternates": ["Half Bound"],
        "definition": "a book bound in two different types of material, generally with the material of better quality on and around the spine"
      },
      {
        "term": "Half <Title></Title>",
        "redirect": "Bookplate",
        "alternates": ["Bastard Title"],
        "definition": "a page with nothing but the book’s title on it, as opposed to the title page which would also include the subtitle, author, publisher, and occasionally the edition"
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      },
      {
        "term": "Ex-Libris",
        "redirect": "Bookplate",
        "alternates": [],
        "definition": ""
      }
    ]


    return(
      <div id='glossary' className='container'>
        <div className='content'>
          <h1>Glossary</h1>
          <div class='terms-list'>
            {terms.map(function(term) {
              return <Term key={term.term} term={term} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

class Term extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className='term' style={{paddingBottom: '20px'}}>
        {this.props.term.term} - {this.props.term.definition}
      </div>
    );
  }
}

export default Glossary;