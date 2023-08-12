const path = require("path");
const uuid = require("uuid").v4;
const { Device, DeviceInfo } = require("../database/models");

class DeviceController {
	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId } = req.body;
			let { info } = req.body;
			const { img } = req.files;
			let filename = uuid() + ".jpg";
			await img.mv(path.resolve(__dirname, "../static", filename));

			const device = await Device.create({ name, price, brandId, typeId, img: filename });
			if (info) {
				info = (typeof info === "string") ? JSON.parse(info) : info;
				await deviceController._createDeviceInfo(info, device.id);
			}

			res.json(device);
		} catch (err) {
			next(err);
		}
	}

	async getAll(req, res) {
		let { limit = 9, page = 1 } = req.query;
		let offset = (page - 1) * limit;

		limit = limit < 1 ? 1 : limit;
		offset = offset < 0 ? 0 : offset;

		const query = {};
		["brandId", "typeId"].forEach((key) => {
			const value = req.query[key];
			if (value) {
				query[key] = value;
			}
		})

		const devices = await Device.findAndCountAll({ where: query, limit, offset })
		res.json(devices);
	}

	async getById(req, res, next) {
		try {
			const { id } = req.params;
			const device = await Device.findOne({
				where: { id },
				include: [{ model: DeviceInfo, as: "info" }]
			})
			res.json(device);
		} catch (err) {
			next(err);
		}
	}

	async _createDeviceInfo(info = [], deviceId) {
		if (!info.length) {
			return;
		}

		const promises = [];
		info.forEach((i) => {
			promises.push(DeviceInfo.create({
				title: i.title,
				description: i.description,
				deviceId
			}))
		})

		await Promise.all(promises);
	}
}


const deviceController = new DeviceController();

module.exports = deviceController;