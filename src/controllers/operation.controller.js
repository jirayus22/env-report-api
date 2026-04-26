const { operationService } = require("../services");
const { ok, fail, catchAsync } = require("../utils");
const { client } = require("../configs/line");

exports.getOperation = catchAsync(async (req, res, next) => {
  const { id } = req.query;

  let result;

  if (id) {
    result = await operationService.getOperationById(id);
  } else {
    result = await operationService.getOperation();
  }

  return ok(res, result);
});

const convertStatus = (status) => {
  return status === true ? "ปกติ" : "ผิดปกติ";
};

const getColor = (field, value) => {
  const v = Number(value);

  switch (field) {
    case "do":
      return v > 1 ? "#FF3B30" : "#333333";

    case "sv30":
      return v < 200 || v > 500 ? "#FF3B30" : "#333333";

    case "ph":
      return v < 5 || v > 8 ? "#FF3B30" : "#333333";

    default:
      return "#333333";
  }
};

const formatDate = (d) =>
  new Date(d).toLocaleString("th-TH", {
    dateStyle: "medium",
    timeStyle: "short",
  });

const isAlert = (v) => Number(v) > 10;

exports.createOperation = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await operationService.createOperation(payload);
  const reponseJson = JSON.stringify(result, null, 2);

  const flexMessage = {
    type: "flex",
    altText: "บันทึกข้อมูลระบบน้ำเสีย",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "บันทึกข้อมูลระบบน้ำเสีย",
            weight: "bold",
            size: "lg",
          },

          {
            type: "text",
            text: "========================",
            color: "#AAAAAA",
          },

          {
            type: "text",
            text: `📅 วันที่ลงข้อมูล: ${formatDate(result.createdAt)}`,
            wrap: true,
          },

          {
            type: "text",
            text: `⚙️ การทำงานของระบบ: ${convertStatus(result.system_status)}`,
            wrap: true,
          },
          {
            type: "text",
            text: `💧 เครื่องสูบน้ำเสีย: ${convertStatus(result.pump_status)}`,
            wrap: true,
          },
          {
            type: "text",
            text: `🌬️ เครื่องเติมอากาศ: ${convertStatus(result.aerator_status)}`,
            wrap: true,
          },
          {
            type: "text",
            text: `🧪 เครื่องสูบตะกอน: ${convertStatus(result.sludge_pump_status)}`,
            wrap: true,
          },
          {
            type: "text",
            text: `🧴 เครื่องหยดคลอรีน: ${convertStatus(result.chlorine_status)}`,
            wrap: true,
          },

          {
            type: "text",
            text: "📊 ค่าคุณภาพน้ำ:",
            weight: "bold",
          },

          {
            type: "text",
            text: `- DO: ${result.do_value}`,
            color: getColor("do", result.do_value),
          },
          {
            type: "text",
            text: `- SV30: ${result.sv30_value}`,
            color: getColor("sv30", result.sv30_value),
          },
          {
            type: "text",
            text: `- pH: ${result.ph_value}`,
            color: getColor("ph", result.ph_value),
          },
        ],
      },
    },
  };
  await client.broadcast({
    messages: [flexMessage],
  });
  return ok(res, result);
});

exports.updateOperation = catchAsync(async (req, res, next) => {
  const payload = req.body;
  console.log("🚀 ~ file: operation.controller.js:122 ~ payload:", payload);
  const result = await operationService.updateOperation(payload);
  return ok(res, result);
});
