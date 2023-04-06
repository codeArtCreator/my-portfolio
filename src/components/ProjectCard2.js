import { Col } from "react-bootstrap";

export const ProjectCard2 = ({imgUrl ,gitlink}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={gitlink} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          {/* <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div> */}
        </div>
      </a>
    </Col>
  )
}
