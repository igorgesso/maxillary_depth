class Exam < ApplicationRecord
  belongs_to :patient

  belongs_to :point_po, class_name: "Point", foreign_key:'point_po_id', dependent: :destroy
  belongs_to :point_or, class_name: "Point", foreign_key: 'point_or_id', dependent: :destroy
  belongs_to :point_a, class_name: "Point", foreign_key: 'point_n_id', dependent: :destroy
  belongs_to :point_n, class_name: "Point", foreign_key: 'point_a_id', dependent: :destroy

  accepts_nested_attributes_for :point_po
  accepts_nested_attributes_for :point_or
  accepts_nested_attributes_for :point_n
  accepts_nested_attributes_for :point_a

  def maxillary_depth_angle
    return nil if self.point_po.x.nil? or self.point_po.y.nil? or self.point_or.x.nil? or self.point_or.y.nil? or self.point_n.x.nil? or self.point_n.y.nil? or self.point_a.x.nil? or self.point_a.y.nil?
    calc_positivo?.truncate(3)
  end

  private
    def slope_straight_line x1,y1,x2,y2
      #calcula coeficente algular da reta      
      Geometry::Line[[x1,y1],[x2,y2]].slope
    end

    def theta
      #testa se a reta NA é vertical e calcula o valor de theta aplicando modulo para não ficar negativo
      if self.point_n.x == self.point_a.x
        (1/slope_straight_line(self.point_po.x,self.point_po.y,self.point_or.x,self.point_or.y)).abs
      else  
      ((slope_straight_line(self.point_po.x,self.point_po.y,self.point_or.x,self.point_or.y) - slope_straight_line(self.point_n.x,self.point_n.y,self.point_a.x,self.point_a.y))/(1 + slope_straight_line(point_po.x,point_po.y,point_or.x,point_or.y)*slope_straight_line(point_n.x,point_n.y,point_a.x,point_a.y))).abs
      end
    end

    def degrees
      #calcula a tangente de theta e converte para angulo
      convert_angle Math.atan(theta) 
    end

    def convert_angle angle
      angle*180/Math::PI
    end

    def calc_positivo?
      #verificar se o produto dos coeficientes é negativo, se for inverte o angulo de retorno(angulos maiores de 90)
      (slope_straight_line(self.point_po.x,self.point_po.y,self.point_or.x,self.point_or.y) * slope_straight_line(self.point_n.x,self.point_n.y,self.point_a.x,self.point_a.y)).positive? ? degrees : 180 - degrees
    end


end
