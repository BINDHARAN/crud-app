import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from "@mui/material/Badge";
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { Card, Row, Col } from 'react-bootstrap'

export function Characters({ initialList, setInitialList }) {
  const history = useHistory()
  return (

    <Row xs={1} md={2} l={3} xl={3} className="g-4 mx-auto mt-5 mb-5">
      {/* maping and passing props */}
      {initialList.map(({ post, name, Superpowers, Weapons }, index) => (
        <Display
          key={index}
          name={name}
          post={post}
          Superpowers={Superpowers}
          Weapons={Weapons}
          //  passing delete btn as a props to display component
          deleteButton={
            <Tooltip title="Delete">

              <IconButton aria-label="delete"
                onClick={() => {
                  const copyinititalList = [...initialList]
                  copyinititalList.splice(index, 1)
                  setInitialList(copyinititalList)
                }}
                color="error">
                <DeleteIcon />
              </IconButton>
            </Tooltip>}
          //  passing edit btn as a props to display component
          editButton={
            <Tooltip title="Edit">
              <IconButton aria-label="edit button"
                onClick={() => history.push(`./characters/edit/${index}`)}
                color="secondary">
                <EditIcon />
              </IconButton>
            </Tooltip>
          }
          id={index}

        />
      )
      )}
    </Row>

  );
}
function Display({ name, post, Superpowers, Weapons, deleteButton, editButton, id }) {

  return (
    // bootstrap card 
    <Col>
      <Card>
        <Card.Img variant="top" src={post} className="img-fluid img" alt="IMG" />
        <Card.Body>
          <Card.Title className="text-center cardTitle">{name} </Card.Title>
          <Card.Text>
            <p >
              <span className=" sub-title">Superpowers: </span>
              <span className="pfont ">{Superpowers}</span>
            </p>
            <p>
              <span className=" sub-title">Weapons: </span>
              <span className="pfont"> {Weapons}</span>
            </p>

          </Card.Text>
          <div>
            <Counter deleteBtn={deleteButton} editButton={editButton} />
          </div>
        </Card.Body>
      </Card>
    </Col>

  );
}

// like and dislike counter component
function Counter({ deleteBtn, editButton }) {
  //hooks
  const [like, setLike] = useState(0);
  const [unlike, setunLike] = useState(0);
  return (
    <div className="button-group">
      <IconButton
        color="primary"
        className="btn1"
        onClick={() => setLike(like + 1)}
      >
        <Badge badgeContent={like} color="secondary">
          <ThumbUpOutlinedIcon />
        </Badge>
      </IconButton>
      {/* delete btn and edit btn */}
      {deleteBtn} {editButton}
      <IconButton
        color="primary"
        className="btn"
        onClick={() => setunLike(unlike + 1)}
      >
        <Badge badgeContent={unlike} color="error">
          <ThumbDownOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  );
}