import React from "react";

const Chapters = ({ item }) => {
  return (
    <div>
      <div
        className="d-flex mt-4 booksData  MuiGrid-container MuiGrid-justify-content-xs-space-around "
        align="flex-start"
      >
        <div
          className="  col-xs-12 col-sm-6 p-0 mb-5"
          style={{ textAlign: "left" }}
        >
          {item[0].firstfive.map((item) => (
            <div className="mb-4">
              <ul className="text-white chapterBackground rounded p-2 chapterFont ">
                <div>
                  <a href="#" className="chapterLink">
                    {" "}
                    <div
                      style={{ marginLeft: "-15px" }}
                      className="mb-3 marginleftChapterName"
                    >
                      {" "}
                      {item.chapterName}
                    </div>
                  </a>

                  {item.topics.map((item) =>
                    item.isList ? (
                      <div className="chapterMarginLeft chapterlistBottomMargin">
                        <li> {item.topic}</li>

                        {item.subTopics.map((item) => (
                          <ul>
                            <li className="chapterlistBottomMargin">{item}</li>
                          </ul>
                        ))}
                      </div>
                    ) : (
                      <div className="chapterMarginLeft chapterlistTopMargin">
                        <li className="chapterlistBottomMargin">
                          {item.topic}
                        </li>
                      </div>
                    )
                  )}
                </div>
              </ul>
            </div>
          ))}
        </div>
        <div
          className="  col-xs-12 col-sm-6   chaptersMarginleft "
          style={{ textAlign: "left" }}
        >
          {item[1].secondfive.map((item) => (
            <div className="mb-4">
              <ul className="text-white chapterBackground rounded p-2 chapterFont ">
                <div>
                  <a href="#" className="chapterLink">
                    {" "}
                    <div
                      style={{ marginLeft: "-15px" }}
                      className="mb-3 marginleftChapterName"
                    >
                      {" "}
                      {item.chapterName}
                    </div>
                  </a>

                  {item.topics.map((item) =>
                    item.isList ? (
                      <div className="chapterMarginLeft chapterlistBottomMargin chapterFont">
                        <li> {item.topic}</li>

                        {item.subTopics.map((item) => (
                          <ul>
                            <li className="chapterlistBottomMargin">{item}</li>
                          </ul>
                        ))}
                      </div>
                    ) : (
                      <div className="chapterMarginLeft chapterlistTopMargin chapterFont">
                        <li className="chapterlistBottomMargin">
                          {item.topic}
                        </li>
                      </div>
                    )
                  )}
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapters;
