/**
 * tools
 */
import { useState, useEffect } from 'react';

/**
 * style
 */
import './index.css';

const documentList = [
  {
    name: 'JP',
    link: 'http://agocw.com/pay_docs/JP.html'
  },
  {
    name: 'UA 印尼',
    link: 'http://agocw.com/pay_docs/UA/ID.html'
  },
  {
    name: 'UA 巴西',
    link: 'http://agocw.com/pay_docs/UA/BR.html'
  },
  {
    name: 'UA 印度',
    link: 'http://agocw.com/pay_docs/UA/IN.html'
  },
  {
    name: 'Change Log',
    link: 'http://agocw.com/pay_docs/change_log.html'
  }
];

const Document = () => {

  /* state */
  const [nowPage, setNowPage] = useState(null);

  /* effect */
  useEffect(() => {
    setNowPage(documentList[0].link);
  }, [])

  /* function */
  const onChangePage = pageLink => {
    setNowPage(null);

    setTimeout(() => setNowPage(pageLink), 500);
  }

  return (
    <div className="document_container">
      <div className="document_menu_section">
        <div className="document_caption">
          <span>API Document</span>
        </div>
        <div className="document_menu_block">
          {
            documentList.map((item, idx) => {
              const { name, link } = item;

              return <p key={idx} className="menu_link" onClick={() => onChangePage(link)}>{name}</p>
            })
          }
        </div>
      </div>
      <div className="document_content_section">
        {
          nowPage &&
          <iframe
            src={nowPage}
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        }
      </div>
    </div>
  );
}

export default Document;
