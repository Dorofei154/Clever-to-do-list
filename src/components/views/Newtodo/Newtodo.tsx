import { Button, Form, Input, DatePicker } from "antd";
import moment from "moment";
import { memo } from "react";
import { S } from "./Newtodo.styles";

export const NewtodoComponent = ({
  onFinish,
  onFinishFailed,
  newHeader,
  changeInput,
  newTodo,
  onChange,
  changeInfo,
  Addtodo,
}: {
  [key: string]: any;
}) => {
  const { TextArea } = Input;
  return (
    <S.Container>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          offset: 1,
          span: 8,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Enter header"
          name="header"
          rules={[
            {
              required: true,
              message: "Please enter header!",
            },
          ]}
        >
          <Input
            id="headertodo"
            value={newHeader}
            defaultValue={newHeader}
            onChange={changeInput}
          />
        </Form.Item>
        <Form.Item
          label="Enter description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please enter description!",
            },
          ]}
        >
          <TextArea
            showCount
            id="inToDo"
            value={newTodo}
            defaultValue={newTodo}
            onChange={changeInput}
            maxLength={100}
          />
        </Form.Item>

        <Form.Item
          label="Select date"
          name="date"
          rules={[
            {
              required: true,
              message: "Please enter description!",
            },
          ]}
        >
          <DatePicker
            defaultValue={
              changeInfo
                ? moment(
                    `2021-${changeInfo[0]["data"]["month"]}-${changeInfo[0]["data"]["date"]}`
                  )
                : undefined
            }
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Button type="primary" onClick={Addtodo}>
            {changeInfo ? "Update" : "Save"}
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};

export const NewtodoView = memo(NewtodoComponent);
