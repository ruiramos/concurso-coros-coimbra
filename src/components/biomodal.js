import React from "react";
import ReactDOM from "react-dom";
import tw from "twin.macro";
import styled from "styled-components";

const BioModal = ({ onClose, coro, children }) => {
  return ReactDOM.createPortal(
    <div>
      <Backdrop onClick={onClose} />
      <ModalContainer>
        <img
          src={`/images/coros/${coro.image}`}
          style={{ boxShadow: "#56c8e5 -4px 4px 0 0" }}
        />
        <h1>{coro.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: children }}></div>
        {coro.frontmatter.video_id && (
          <div css={[tw`p-4 flex justify-center`]}>
            <div css={[tw`flex flex-col`, { maxWidth: 450 }]}>
              <iframe
                width="450"
                height="300"
                src={`https://www.youtube.com/embed/${coro.frontmatter.video_id}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <a href="" css={[tw`inline-block mt-2 text-center`]}>
                {coro.name} no Concurso (YouTube)
              </a>
            </div>
          </div>
        )}
        <button onClick={onClose}>Fechar</button>
      </ModalContainer>
    </div>,
    document.querySelector("body")
  );
};

const Backdrop = styled.div`
  ${tw`absolute z-10 bg-black inset-0 opacity-80 h-full`}
`;

const ModalContainer = styled.div`
  ${tw`absolute z-20 top-8 border border-solid border-gray-200 bg-white p-10 rounded`}
  width: 70%;
  left: 15%;
  @media only screen and (max-device-width: 480px) {
    width: 90%;
    left: 5%;
    padding: 1em;
  }

  h1 {
    ${tw`mb-6`}
  }

  img {
    float: right;
    width: 350px;
    margin: 0 0 20px 20px;
  }
`;

export default BioModal;
