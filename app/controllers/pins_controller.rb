class PinsController < ApplicationController

  def index
    @pins = Pin.all

    respond_to do |format|
      format.json { render json: @pins }
    end
  end

  def create
    @pin = Pin.new(pin_params)

    respond_to do |format|
      if @pin.save
        format.json { render json: @pin, status: :created }
      else
        format.json { render nothing: true, status: 400 }
      end
    end

  end

  def show
    @pin = Pin.find(params[:id])

    respond_to do |format|
      if @pin
        format.json { render json: @pin }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  def update
    @pin = Pin.find(params[:id])

    respond_to do |format|
      if @pin.update(pin_params)
        format.json { render json: @pin, status: 200 }
      else
        format.json { render nothing: true, status: 400 }
      end
    end

  end

  def destroy
    @pin = Pin.find(params[:id])

    respond_to do |format|
      if @pin.destroy
        format.json { render json: @pin, status: 200 }
      else
        format.json { render nothing: true, status: 400 }
      end
    end

  end

  private

  def pin_params
    params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id)
  end
end
