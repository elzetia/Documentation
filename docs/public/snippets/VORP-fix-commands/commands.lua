---@diagnostic disable: undefined-global

local function toggleComp(hash, item)
	local __player = PlayerPedId()
	if Citizen.InvokeNative(0xFB4891BD7578CDC1, __player, hash) then
		item = 0
	end
	local category = 'unknown'
	for categoryName,categoryHash in pairs (Config.HashList) do
		if categoryHash == hash then
			category = categoryName
			break
		end
	end
	TriggerEvent('kd_clothingstore:setClothData', __player, category, item)
end


for key, v in pairs(Config.commands) do
	RegisterCommand(v.command, function()
		print(key, CachedComponents[key])
		toggleComp(Config.HashList[key], CachedComponents[key])
	end, false)
end

RegisterCommand("rings", function()
	toggleComp(0x7A6BBD0B, CachedComponents.RingLh)
	toggleComp(0xF16A1D23, CachedComponents.RingRh)
end, false)


RegisterCommand("undress", function()
	TriggerEvent("kd_clothingstore:removeAllClothes")
end, false)

RegisterCommand("dress", function()
	TriggerEvent('kd_clothingstore:resetClothes')
end, false)

local BandanaOn = false
RegisterCommand('bandanaon', function(source, args, rawCommand)
	local player = PlayerPedId()
	if not BandanaOn then
		Citizen.InvokeNative(0xAE72E7DF013AAA61, player, 0, `BANDANA_ON_RIGHT_HAND`, 1, 0, -1.0)
		Wait(750)
	end
	if type(CachedComponents.NeckWear) == "table" then
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, player, CachedComponents.NeckWear.hash, -1829635046, 0, true, 1)
		if CachedComponents.NeckWear.palette then
    	Citizen.InvokeNative(0x4EFC1F8FF1AD94DE,
				player,
				94259016,
				CachedComponents.NeckWear.palette,
				CachedComponents.NeckWear.tint0,
				CachedComponents.NeckWear.tint1,
				CachedComponents.NeckWear.tint2
			)
		end
	else
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, player, CachedComponents.NeckWear, -1829635046, 0, true, 1)
	end
	Citizen.InvokeNative(0x704C908E9C405136, player)
	BandanaOn = true
end, false)

RegisterCommand('bandanaoff', function(source, args, rawCommand)
	local player = PlayerPedId()
	if BandanaOn then
		Citizen.InvokeNative(0xAE72E7DF013AAA61, player, 0, `BANDANA_OFF_RIGHT_HAND`, 1, 0, -1.0)
		Wait(750)
	end
	if type(CachedComponents.NeckWear) == "table" then
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, player, CachedComponents.NeckWear.hash, `base`, 0, true, 1)
		if CachedComponents.NeckWear.palette then
    	Citizen.InvokeNative(0x4EFC1F8FF1AD94DE,
				player,
				94259016,
				CachedComponents.NeckWear.palette,
				CachedComponents.NeckWear.tint0,
				CachedComponents.NeckWear.tint1,
				CachedComponents.NeckWear.tint2
			)
		end
	else
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, player, CachedComponents.NeckWear, `base`, 0, true, 1)
	end
	Citizen.InvokeNative(0x704C908E9C405136, player)
	BandanaOn = false
end, false)


local sleeves = false
RegisterCommand("sleeves", function()
	if CachedComponents.Shirt == -1 then return end

	local status = joaat((not sleeves) and "Closed_Collar_Rolled_Sleeve" or "base")
	if type(CachedComponents.Shirt) == "table" then
		if CachedComponents.Shirt.hash == -1 then return end
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, PlayerPedId(), CachedComponents.Shirt.hash,status, 0,true, 1)
		if CachedComponents.Shirt.palette then
    	Citizen.InvokeNative(0x4EFC1F8FF1AD94DE,
				PlayerPedId(),
				joaat('shirts_full'),
				CachedComponents.Shirt.palette,
				CachedComponents.Shirt.tint0,
				CachedComponents.Shirt.tint1,
				CachedComponents.Shirt.tint2
			)
		end
		sleeves = not sleeves
	else
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, PlayerPedId(), CachedComponents.Shirt,status, 0, true, 1)
		sleeves = not sleeves
	end
	Citizen.InvokeNative(0x704C908E9C405136, PlayerPedId())
end, false)

local sleeves2 = false
RegisterCommand("sleeves2", function()
	if CachedComponents.Shirt == -1 then return end

	local status = joaat((not sleeves2) and "open_collar_rolled_sleeve" or "base")
	if type(CachedComponents.Shirt) == "table" then
		if CachedComponents.Shirt.hash == -1 then return end
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, PlayerPedId(), CachedComponents.Shirt.hash,status, 0,true, 1)
		if CachedComponents.Shirt.palette then
    	Citizen.InvokeNative(0x4EFC1F8FF1AD94DE,
				PlayerPedId(),
				joaat('shirts_full'),
				CachedComponents.Shirt.palette,
				CachedComponents.Shirt.tint0,
				CachedComponents.Shirt.tint1,
				CachedComponents.Shirt.tint2
			)
		end
		sleeves2 = not sleeves2
	else
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, PlayerPedId(), CachedComponents.Shirt,status, 0, true, 1)
		sleeves2 = not sleeves2
	end
	Citizen.InvokeNative(0x704C908E9C405136, PlayerPedId())
end, false)

local tuck = false
RegisterCommand("tuck", function()
	if CachedComponents.Boots == -1 then return end

	local status = joaat((not tuck) and -2081918609 or "base")
	if type(CachedComponents.Boots) == "table" then
		if CachedComponents.Boots.hash == -1 then return end
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, PlayerPedId(), CachedComponents.Boots.hash,status, 0,true, 1)
		if CachedComponents.Boots.palette then
    	Citizen.InvokeNative(0x4EFC1F8FF1AD94DE,
				PlayerPedId(),
				joaat('Bootss_full'),
				CachedComponents.Boots.palette,
				CachedComponents.Boots.tint0,
				CachedComponents.Boots.tint1,
				CachedComponents.Boots.tint2
			)
		end
		tuck = not tuck
	else
		Citizen.InvokeNative(0x66B957AAC2EAAEAB, PlayerPedId(), CachedComponents.Boots,status, 0, true, 1)
		sleeves2 = not sleeves2
	end
	Citizen.InvokeNative(0x704C908E9C405136, PlayerPedId())
end, false)