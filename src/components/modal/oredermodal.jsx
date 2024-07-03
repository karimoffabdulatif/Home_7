import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ServiceValidationSchema } from "../../utils/validation";
import order from "../../service/order";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: 1.3,
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 3,
  outline: "none",
};

export default function AddService() {
  const initialValues = {
    client_full_name: "",
    client_phone_number: "",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (values) => {
    try {
      const response = await order.add(values); 
      if (response.status === 201) {
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add Order
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Order
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={ServiceValidationSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="client_full_name"
                    type="text"
                    as={TextField}
                    label="Full Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="client_full_name"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="client_phone_number"
                    type="text"
                    as={TextField}
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="client_phone_number"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      gap: "12px",
                      marginTop: "5px",
                    }}
                  >
                    <Button
                      onClick={handleClose}
                      type="button"
                      variant="contained"
                      color="primary"
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      disabled={isSubmitting}
                    >
                      Add
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
